// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pageSize: 'pageSize',
      params: 'params',
      serviceName: 'service_name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pageSize: 'number',
      params: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

