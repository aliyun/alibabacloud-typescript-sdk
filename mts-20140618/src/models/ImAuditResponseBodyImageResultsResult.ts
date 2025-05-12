// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImAuditResponseBodyImageResultsResultResults } from "./ImAuditResponseBodyImageResultsResultResults";


export class ImAuditResponseBodyImageResultsResult extends $dara.Model {
  /**
   * @remarks
   * The error code. The error code is the same as the HTTP status code. This parameter is not returned if the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * >  If you set the dataId parameter in the moderation request, the dataId parameter is returned in the response.
   * 
   * @example
   * uuid-1234-1234-1234
   */
  dataId?: string;
  /**
   * @remarks
   * The additional information about the image. If ad is specified for the Scenes parameter, the following content may be returned for this parameter: hitLibInfo: the information about the custom text library that is hit by the text in the image. The value of this parameter is an array. For more information about the structure, see [hitLibInfo](https://help.aliyun.com/document_detail/268644.html).
   */
  extras?: { [key: string]: any };
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * @example
   * ok
   */
  msg?: string;
  /**
   * @remarks
   * The returned data. If the call is successful, the array in the returned results contains one or more elements. Each element is a struct.
   */
  results?: ImAuditResponseBodyImageResultsResultResults[];
  /**
   * @remarks
   * The ID of the moderation task.
   * 
   * @example
   * img4wlJcb7p4wH4lAP3111111-12****
   */
  taskId?: string;
  /**
   * @remarks
   * The URL of the moderated object.
   * 
   * @example
   * http://example.com/example-****.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      dataId: 'dataId',
      extras: 'extras',
      msg: 'msg',
      results: 'results',
      taskId: 'taskId',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataId: 'string',
      extras: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      msg: 'string',
      results: { 'type': 'array', 'itemType': ImAuditResponseBodyImageResultsResultResults },
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.extras) {
      $dara.Model.validateMap(this.extras);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

