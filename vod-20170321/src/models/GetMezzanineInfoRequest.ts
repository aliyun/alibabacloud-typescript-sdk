// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMezzanineInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The type of additional information. Separate multiple values with commas (,). By default, only the basic information is returned. Valid values:
   * 
   * *   **video**: video stream information
   * *   **audio**: audio stream information
   * 
   * @example
   * video
   */
  additionType?: string;
  /**
   * @remarks
   * The validity period of the mezzanine file URL. Unit: seconds. Default value: **1800**. Minimum value: **1**.
   * 
   * *   If the OutputType parameter is set to **cdn**:
   * 
   *     *   The mezzanine file URL has a validity period only if URL signing is enabled. Otherwise, the mezzanine file URL is permanently valid.
   *     *   Minimum value: **1**.
   *     *   Maximum Value: unlimited.
   *     *   Default value: If you do not set this parameter, the default validity period that is specified in URL signing is used.
   * 
   * <!---->
   * 
   * *   If the OutputType parameter is set to **oss**:
   * 
   *     *   The mezzanine file URL has a validity period only if the permissions on the Object Storage Service (OSS) bucket are private. Otherwise, the mezzanine file URL is permanently valid.
   *     *   Minimum value: **1**.
   *     *   Maximum value: **2592000** (30 days). The maximum value is limited to reduce security risks of the origin.
   *     *   Default value: If you do not set this parameter, the default value is **3600**.
   * 
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @remarks
   * The type of the mezzanine file URL. Valid values:
   * 
   * - **oss**: OSS URL
   * - **cdn** (default): Content Delivery Network (CDN) URL
   * 
   * > If the mezzanine file is stored in a bucket of the in type, only an OSS URL is returned.
   * 
   * @example
   * oss
   */
  outputType?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The ID of the video.
   * 
   * @example
   * 1f1a6fc03ca04814031b8a6559e****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      additionType: 'AdditionType',
      authTimeout: 'AuthTimeout',
      outputType: 'OutputType',
      referenceId: 'ReferenceId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionType: 'string',
      authTimeout: 'number',
      outputType: 'string',
      referenceId: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

