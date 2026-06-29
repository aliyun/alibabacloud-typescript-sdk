// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ViewPlugin } from "./ViewPlugin";


export class GetTemplateViewResponseBodyViewConfigs extends $dara.Model {
  /**
   * @remarks
   * List of data display configuration plugins
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

export class GetTemplateViewResponseBody extends $dara.Model {
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
   * ""
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
   * Data display configuration
   */
  viewConfigs?: GetTemplateViewResponseBodyViewConfigs;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      viewConfigs: 'ViewConfigs',
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
      viewConfigs: GetTemplateViewResponseBodyViewConfigs,
    };
  }

  validate() {
    if(this.viewConfigs && typeof (this.viewConfigs as any).validate === 'function') {
      (this.viewConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

