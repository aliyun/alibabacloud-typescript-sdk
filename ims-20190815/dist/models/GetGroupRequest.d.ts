import * as $dara from '@darabonba/typescript';
export declare class GetGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the user group.
     *
     * @example
     * Dev-Team
     */
    groupName?: string;
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
