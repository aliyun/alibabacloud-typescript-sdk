// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntelligentStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  conditions?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  executeParams?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  state?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      executeParams: 'ExecuteParams',
      name: 'Name',
      priority: 'Priority',
      startTime: 'StartTime',
      state: 'State',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: 'string',
      executeParams: 'string',
      name: 'string',
      priority: 'number',
      startTime: 'string',
      state: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

