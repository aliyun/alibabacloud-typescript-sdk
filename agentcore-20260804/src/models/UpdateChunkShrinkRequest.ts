// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChunkShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * You must provide the chunkToken and at least one of the content or enabled parameters.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * Required when modifying the content. Used for idempotent retries of asynchronous edits. This parameter is not used as a query parameter for GetAsset. If the same token is used with different parameters, IdempotencyConflict is returned. This parameter can be omitted when only modifying the enabled status, and no asynchronous receipt is created.
   * 
   * @example
   * chunk-update-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

