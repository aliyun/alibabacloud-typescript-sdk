// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSourceLocationRequest extends $dara.Model {
  /**
   * @remarks
   * The protocol and hostname of the source location.
   * 
   * @example
   * http://xxx.com
   */
  baseUrl?: string;
  /**
   * @remarks
   * Specifies whether to use an independent domain name to access the segments.
   * 
   * @example
   * true
   */
  enableSegmentDelivery?: boolean;
  /**
   * @remarks
   * The domain name used to access the segments.
   * 
   * @example
   * http://xxxx.com
   */
  segmentDeliveryUrl?: string;
  /**
   * @remarks
   * The name of the source location.
   * 
   * This parameter is required.
   * 
   * @example
   * MySourceLocation
   */
  sourceLocationName?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
      enableSegmentDelivery: 'EnableSegmentDelivery',
      segmentDeliveryUrl: 'SegmentDeliveryUrl',
      sourceLocationName: 'SourceLocationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      enableSegmentDelivery: 'boolean',
      segmentDeliveryUrl: 'string',
      sourceLocationName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

