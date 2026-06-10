// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 8fa1953f-4a84-46d8-b80c-8ce9cf684fb3
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * This parameter is required.
   * 
   * @example
   * 8a4c6d3d-5ed6-44ca-b779-16c20f8862be
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

