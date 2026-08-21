// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAiAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the image access URL. Unit: seconds.
   * 
   * - If OutputType is set to cdn:
   *     - Only image URLs with URL authentication enabled expire. Otherwise, the URLs are permanently valid.
   *     - Minimum value: 1.
   *     - Maximum value: unlimited.
   *     - Default value: If this parameter is not specified, the default validity period specified in URL authentication settings is used.
   * - If OutputType is set to oss:
   *     - Only image URLs with private storage permissions expire. Otherwise, the URLs are permanently valid.
   *     - Minimum value: 1.
   *     - Maximum value: To reduce security risks to the origin server, the maximum value is **2592000** (30 days) if images are stored in a bucket managed by ApsaraVideo VOD, and **129600** (36 hours) if images are stored in your own OSS bucket.
   *     - Default value: If this parameter is not specified, the value is 3600.
   * 
   * @example
   * 3600
   */
  authTimeout?: string;
  /**
   * @remarks
   * The audio ID. You can query the audio ID in the ApsaraVideo VOD console or obtain it from the response of the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation.
   * 
   * @example
   * 006204a11bb386bb25491f95f****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the output URL. Valid values:
   * 
   * - **oss**: back-to-origin URL.
   * - **cdn** (default): accelerated URL.
   * 
   * @example
   * cdn
   */
  outputType?: string;
  /**
   * @remarks
   * The type of analysis results. Separate multiple types with commas (,).
   * 
   * @example
   * Chapter
   */
  resultTypes?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      mediaId: 'MediaId',
      outputType: 'OutputType',
      resultTypes: 'ResultTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'string',
      mediaId: 'string',
      outputType: 'string',
      resultTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

