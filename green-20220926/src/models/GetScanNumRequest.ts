// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanNumRequest extends $dara.Model {
  /**
   * @remarks
   * Storage space.
   * 
   * @example
   * tmpsample
   */
  buckets?: string;
  /**
   * @remarks
   * Media type.
   * 
   * @example
   * image
   */
  mediaType?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      buckets: 'Buckets',
      mediaType: 'MediaType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buckets: 'string',
      mediaType: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

