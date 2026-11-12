import * as $dara from '@darabonba/typescript';
export declare class ModifyConsumerGroupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the consumer group.
     *
     * @example
     * cg-xxxxxx
     */
    consumerGroupId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
     */
    requestId?: string;
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
