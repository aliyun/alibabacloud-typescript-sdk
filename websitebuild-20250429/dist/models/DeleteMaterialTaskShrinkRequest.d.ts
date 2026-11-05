import * as $dara from '@darabonba/typescript';
export declare class DeleteMaterialTaskShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The list of task IDs.
     *
     * This parameter is required.
     */
    taskIdsShrink?: string;
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
