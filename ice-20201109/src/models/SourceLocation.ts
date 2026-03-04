// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceLocation extends $dara.Model {
  /**
   * @remarks
   * The ARN of the source location.
   * 
   * @example
   * acs:ims:mediaweaver:<regionId>:<UserId>:sourcelocation/MySourceLocation
   */
  arn?: string;
  /**
   * @remarks
   * The base URL of the source location.
   * 
   * @example
   * http://xxxx.com
   */
  baseUrl?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-09-12T07:15:52Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-10-22T10:49:14Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The segment delivery server configurations.
   * 
   * @example
   * http://segmentdelivery.com
   */
  segmentDeliveryConfigurations?: string;
  /**
   * @remarks
   * The name of the source location.
   * 
   * @example
   * MySourceLocation
   */
  sourceLocationName?: string;
  /**
   * @remarks
   * The status of the source location. 0: normal. 1: deleted.
   * 
   * @example
   * 0
   */
  state?: number;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      baseUrl: 'BaseUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      segmentDeliveryConfigurations: 'SegmentDeliveryConfigurations',
      sourceLocationName: 'SourceLocationName',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      baseUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      segmentDeliveryConfigurations: 'string',
      sourceLocationName: 'string',
      state: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

