// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ViewPlugin } from "./ViewPlugin";


export class GetTaskTemplateViewsResponseBodyViews extends $dara.Model {
  /**
   * @remarks
   * List of view plugins
   */
  viewPlugins?: ViewPlugin[];
  static names(): { [key: string]: string } {
    return {
      viewPlugins: 'ViewPlugins',
    };
  }

  static types(): { [key: string]: any } {
    return {
      viewPlugins: { 'type': 'array', 'itemType': ViewPlugin },
    };
  }

  validate() {
    if(Array.isArray(this.viewPlugins)) {
      $dara.Model.validateArray(this.viewPlugins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskTemplateViewsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Total amount of data under the current request conditions. This parameter is optional and does not need to be returned by default.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * error code
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Return message of the request
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1F29E
   */
  requestId?: string;
  /**
   * @remarks
   * is succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * view
   */
  views?: GetTaskTemplateViewsResponseBodyViews;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      views: GetTaskTemplateViewsResponseBodyViews,
    };
  }

  validate() {
    if(this.views && typeof (this.views as any).validate === 'function') {
      (this.views as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

