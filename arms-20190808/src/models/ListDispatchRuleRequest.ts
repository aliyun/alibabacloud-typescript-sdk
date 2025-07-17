// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDispatchRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the notification policy. Fuzzy match is supported.
   * 
   * @example
   * Prod
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * *   The type of notification policies to be queried. Valid values: `false` (default): notification policies created in Application Real-Time Monitoring Service (ARMS).
   * *   `true`: notification policies created in an external system.
   * 
   * >  You cannot use the ARMS console to modify the dispatch rules of a notification policy that is created in an external system.
   * 
   * @example
   * true
   */
  system?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
      system: 'System',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
      system: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

