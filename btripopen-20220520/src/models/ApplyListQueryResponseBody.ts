// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyListQueryResponseBodyModuleList } from "./ApplyListQueryResponseBodyModuleList";


export class ApplyListQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  moduleList?: ApplyListQueryResponseBodyModuleList[];
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      moduleList: 'module_list',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      moduleList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleList },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.moduleList)) {
      $dara.Model.validateArray(this.moduleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

