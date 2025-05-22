// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartReverseWriterRequest extends $dara.Model {
  /**
   * @remarks
   * The offset of the Incremental Write module. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. 
   * 
   * > The default value is the offset that is automatically saved by DTS when the task is paused.
   * 
   * @example
   * 1695613785
   */
  checkPoint?: string;
  /**
   * @remarks
   * The ID of the reverse task that was created by calling the CreateReverseDtsJob operation.
   * 
   * This parameter is required.
   * 
   * @example
   * n99m9jx822k****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      checkPoint: 'CheckPoint',
      dtsJobId: 'DtsJobId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkPoint: 'string',
      dtsJobId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

