// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeInstanceStatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

