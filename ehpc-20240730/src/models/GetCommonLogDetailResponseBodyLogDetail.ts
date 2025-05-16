// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCommonLogDetailResponseBodyLogDetailStages } from "./GetCommonLogDetailResponseBodyLogDetailStages";


export class GetCommonLogDetailResponseBodyLogDetail extends $dara.Model {
  /**
   * @remarks
   * The stage name of the log.
   * 
   * @example
   * ConfigNetwork
   */
  stageName?: string;
  /**
   * @remarks
   * The information about the log stages.
   */
  stages?: GetCommonLogDetailResponseBodyLogDetailStages[];
  static names(): { [key: string]: string } {
    return {
      stageName: 'StageName',
      stages: 'Stages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageName: 'string',
      stages: { 'type': 'array', 'itemType': GetCommonLogDetailResponseBodyLogDetailStages },
    };
  }

  validate() {
    if(Array.isArray(this.stages)) {
      $dara.Model.validateArray(this.stages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

