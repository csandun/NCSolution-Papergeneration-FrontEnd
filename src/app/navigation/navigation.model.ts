import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface
{
    public model: any[];

    constructor()
    {
        this.model = [
            {
                'id'      : 'applications',
                'title'   : 'Applications',
                'translate': 'NAV.APPLICATIONS',
                'type'    : 'group',
                'children': [
                    {
                        'id'   : 'Exams',
                        'title': 'Exams',
                        'translate': 'NAV.SAMPLE.TITLE',
                        'type' : 'item',
                        'icon' : 'email',
                        'url'  : '/exams',
                        'badge': {
                            'title': 2,
                            'translate': 'NAV.SAMPLE.BADGE',
                            'bg'   : '#F44336',
                            'fg'   : '#FFFFFF'
                        }
                    }
                ]
            }
        ];
    }
}
