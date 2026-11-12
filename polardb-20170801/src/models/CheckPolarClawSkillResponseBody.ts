// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckPolarClawSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * []
   */
  message?: string[];
  /**
   * @remarks
   * The name of the OSS bucket where the skill files are stored.
   * 
   * @example
   * oss-bucket-test
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The region ID of the OSS bucket where the skill files are stored.
   * 
   * @example
   * cn-hangzhou
   */
  OSSRegionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * - **true**: The request is successful.
   * 
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      OSSBucket: 'OSSBucket',
      OSSRegionId: 'OSSRegionId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: { 'type': 'array', 'itemType': 'string' },
      OSSBucket: 'string',
      OSSRegionId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.message)) {
      $dara.Model.validateArray(this.message);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

