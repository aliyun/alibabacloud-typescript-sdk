// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Diagnostic parameters. Different diagnosis types require different diagnostic parameters. You can use this field to filter records whose parameter values match the specified value.
   * 
   * @example
   * [{\\"key\\":\\"region\\",\\"value\\":\\"cn-beijing\\"}]
   */
  params?: string;
  /**
   * @remarks
   * Diagnosis type
   * 
   * @example
   * memgraph
   */
  serviceName?: string;
  /**
   * @remarks
   * Status of the diagnostic task execution.  
   * Valid values:  
   * - **Ready**: Ready  
   * - **Running**: Running  
   * - **Success**: Succeeded  
   * - **Fail**: Failed
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

