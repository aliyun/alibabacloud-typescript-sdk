// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineCodeVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The description of the code version.
   * 
   * @example
   * test ver code desc
   */
  codeDescription?: string;
  /**
   * @remarks
   * The time when the version was created.
   * 
   * @example
   * 2024-03-11T01:23:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  /**
   * @remarks
   * The code content.
   * 
   * @example
   * PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPEVycm9yPgogIDxDb2RlPk5vU3VjaEtleTwvQ29kZT4KICA8TWVzc2FnZT5UaGUgc3BlY2lmaWVkIGtleSBkb2VzIG5vdCBleGlzdC48L01lc3NhZ2U
   */
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

