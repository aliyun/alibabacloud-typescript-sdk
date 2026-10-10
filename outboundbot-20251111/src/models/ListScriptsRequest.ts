// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The chatbot builder type.
   * 
   * @example
   * LITE
   */
  builderType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * Satisfaction survey
   */
  name?: string;
  /**
   * @remarks
   * The NLU engine type.
   * 
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to return only published scripts.
   * 
   * @example
   * true
   */
  publishOnly?: boolean;
  /**
   * @remarks
   * The list of script IDs.
   */
  scriptIds?: string[];
  static names(): { [key: string]: string } {
    return {
      builderType: 'BuilderType',
      instanceId: 'InstanceId',
      name: 'Name',
      nluEngine: 'NluEngine',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publishOnly: 'PublishOnly',
      scriptIds: 'ScriptIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      builderType: 'string',
      instanceId: 'string',
      name: 'string',
      nluEngine: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publishOnly: 'boolean',
      scriptIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scriptIds)) {
      $dara.Model.validateArray(this.scriptIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

