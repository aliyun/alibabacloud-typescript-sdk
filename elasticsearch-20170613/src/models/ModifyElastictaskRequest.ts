// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElastictaskRequest extends $dara.Model {
  /**
   * @remarks
   * The scaling information.
   * 
   * @example
   * {     "elasticExpansionTask":     {         "triggerType":"crontab",         "cronExpression":"0 0 0 ? * MON",         "elasticNodeCount":"2",         "targetIndices":["*"],         "replicaCount":"2"     } }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

