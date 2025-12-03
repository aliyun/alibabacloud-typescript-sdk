// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPipelineRunRequest extends $dara.Model {
  /**
   * @example
   * {     "branchModeBranchs":[         "branch1",         "branch2"     ],     "envs":{         "k1":"v1",         "k2":"v2",         "k3":"v3"     },     "runningBranchs":{         "https://codeup.aliyun.com/60c1abb32c5969c370c5fcd0/Codeup-Demo.git":"master1"     },     "runningTags":{         "https://codeup.aliyun.com/60c1abb32c5969c370c5fcd0/Codeup-Demo.git":"1.0"     } }
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

