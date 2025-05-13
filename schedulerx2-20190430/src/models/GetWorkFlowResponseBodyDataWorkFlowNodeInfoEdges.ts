// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges extends $dara.Model {
  /**
   * @remarks
   * The ID of the source job.
   * 
   * @example
   * 100
   */
  source?: number;
  /**
   * @remarks
   * The ID of the object job.
   * 
   * @example
   * 200
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

