// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The diagnostic parameters. Different diagnostic types require different diagnostic parameters. You can use this field to filter records whose parameters match the specified values.
   * 
   * @example
   * [{\\"key\\":\\"region\\",\\"value\\":\\"cn-beijing\\"}]
   */
  params?: string;
  /**
   * @remarks
   * The diagnostic type.
   * 
   * @example
   * memgraph
   */
  serviceName?: string;
  /**
   * @remarks
   * The execution status of the diagnostic task.
   * 
   * Valid values:
   * - **Ready**: Ready.
   * - **Running**: Running.
   * - **Success**: Succeeded.
   * - **Fail**: Failed.
   * 
   * @example
   * Running
   */
  status?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      current: 'current',
      pageSize: 'pageSize',
      params: 'params',
      serviceName: 'service_name',
      status: 'status',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      current: 'number',
      pageSize: 'number',
      params: 'string',
      serviceName: 'string',
      status: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

