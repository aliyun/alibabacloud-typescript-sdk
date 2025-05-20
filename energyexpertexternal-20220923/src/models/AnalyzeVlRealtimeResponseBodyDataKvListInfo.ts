// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeVlRealtimeResponseBodyDataKvListInfoContext } from "./AnalyzeVlRealtimeResponseBodyDataKvListInfoContext";


export class AnalyzeVlRealtimeResponseBodyDataKvListInfo extends $dara.Model {
  /**
   * @remarks
   * Recall content
   */
  context?: AnalyzeVlRealtimeResponseBodyDataKvListInfoContext;
  /**
   * @remarks
   * Field Key name
   * 
   * @example
   * username
   */
  keyName?: string;
  /**
   * @remarks
   * Field key value
   * 
   * @example
   * bob
   */
  keyValue?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      keyName: 'keyName',
      keyValue: 'keyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: AnalyzeVlRealtimeResponseBodyDataKvListInfoContext,
      keyName: 'string',
      keyValue: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

