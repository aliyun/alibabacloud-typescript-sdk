// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolarClawSkillRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores images.
   * 
   * @example
   * oss-bucket-test
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OSSBucket: 'OSSBucket',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSBucket: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

