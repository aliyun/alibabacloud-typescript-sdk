import * as $dara from '@darabonba/typescript';
export declare class WelcomeBlock extends $dara.Model {
    description?: string;
    displayType?: string;
    icon?: string;
    label?: string;
    type?: string;
    value?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
