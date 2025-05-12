// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDiagnosisRequest extends $dara.Model {
  current?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  params?: string;
  serviceName?: string;
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

