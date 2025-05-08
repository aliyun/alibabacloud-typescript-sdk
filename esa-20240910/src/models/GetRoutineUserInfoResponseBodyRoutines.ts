// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineUserInfoResponseBodyRoutines extends $dara.Model {
  /**
   * @remarks
   * The time when the routine was created.
   * 
   * @example
   * 2024-03-11T01:23:02.883361712Z
   */
  createTime?: string;
  /**
   * @remarks
   * The routine description, which is Base64-encoded.
   * 
   * @example
   * ZWRpdCByb3V0aW5lIGNvbmZpZyBkZXNjcmlwdGlvbg
   */
  description?: string;
  /**
   * @remarks
   * The routine name.
   * 
   * @example
   * test-routine1
   */
  routineName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      routineName: 'RoutineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      routineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

