// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRoutineResponseBodyEnvs } from "./GetRoutineResponseBodyEnvs";


export class GetRoutineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the routine was created.
   * 
   * @example
   * 2024-03-11T01:23:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default record name to access.
   * 
   * @example
   * routine1.example.com
   */
  defaultRelatedRecord?: string;
  /**
   * @remarks
   * The description of the routine.
   * 
   * @example
   * ZWRpdCByb3V0aW5lIGNvbmZpZyBkZXNjcmlwdGlvbg
   */
  description?: string;
  /**
   * @remarks
   * The information about the environments.
   */
  envs?: GetRoutineResponseBodyEnvs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultRelatedRecord: 'DefaultRelatedRecord',
      description: 'Description',
      envs: 'Envs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultRelatedRecord: 'string',
      description: 'string',
      envs: { 'type': 'array', 'itemType': GetRoutineResponseBodyEnvs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.envs)) {
      $dara.Model.validateArray(this.envs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

