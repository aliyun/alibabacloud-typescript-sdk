// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlowJSONAssestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * https://url.com/json.json
   */
  filePath?: string;
  /**
   * @remarks
   * The Flow ID.
   * 
   * @example
   * flow_id_arms
   */
  flowId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      flowId: 'FlowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      flowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

