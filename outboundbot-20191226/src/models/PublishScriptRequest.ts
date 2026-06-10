// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishScriptRequest extends $dara.Model {
  /**
   * @remarks
   * A description of the publication.
   * 
   * This parameter is required.
   * 
   * @example
   * 本次发布了xxxx内容
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the scenario to publish.
   * 
   * This parameter is required.
   * 
   * @example
   * 3677fe8b-276f-4541-babf-b9d3082a31ba
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

