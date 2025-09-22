// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineCodeVersionResponseBody extends $dara.Model {
  codeDescription?: string;
  createTime?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  routineCode?: string;
  static names(): { [key: string]: string } {
    return {
      codeDescription: 'CodeDescription',
      createTime: 'CreateTime',
      requestId: 'RequestId',
      routineCode: 'RoutineCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDescription: 'string',
      createTime: 'string',
      requestId: 'string',
      routineCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

