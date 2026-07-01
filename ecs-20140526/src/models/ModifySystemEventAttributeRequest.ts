// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySystemEventAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e-2zeielxl1qzq8slb****
   */
  eventId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-06-30T00:00:00Z
   */
  notBefore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
      notBefore: 'NotBefore',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
      notBefore: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

