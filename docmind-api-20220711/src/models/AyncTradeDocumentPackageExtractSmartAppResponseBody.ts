// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AyncTradeDocumentPackageExtractSmartAppResponseBody extends $dara.Model {
  completed?: boolean;
  createTime?: string;
  data?: any;
  /**
   * @example
   * 43A29C77-405E-4CC0-BC55-EE694AD00655
   */
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      data: 'Data',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      data: 'any',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

