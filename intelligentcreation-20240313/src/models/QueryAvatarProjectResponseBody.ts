// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAvatarProjectResponseBodyFrames } from "./QueryAvatarProjectResponseBodyFrames";


export class QueryAvatarProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 1000222
   */
  agentId?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  frames?: QueryAvatarProjectResponseBodyFrames[];
  /**
   * @example
   * doc_test_3
   */
  projectName?: string;
  /**
   * @example
   * 2C331582-7390-5949-8D9A-AC8239185B37
   */
  requestId?: string;
  resSpecType?: string;
  scaleType?: string;
  scriptModelTag?: string;
  /**
   * @example
   * DEPLOYING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      errorMsg: 'errorMsg',
      frames: 'frames',
      projectName: 'projectName',
      requestId: 'requestId',
      resSpecType: 'resSpecType',
      scaleType: 'scaleType',
      scriptModelTag: 'scriptModelTag',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      errorMsg: 'string',
      frames: { 'type': 'array', 'itemType': QueryAvatarProjectResponseBodyFrames },
      projectName: 'string',
      requestId: 'string',
      resSpecType: 'string',
      scaleType: 'string',
      scriptModelTag: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

