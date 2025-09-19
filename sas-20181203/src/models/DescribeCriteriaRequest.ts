// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   Set the value to **ecs**, which specifies to query all Elastic Compute Service (ECS) instances.
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * Specifies whether the keyword that you specify for fuzzy search can be automatically matched. Default value: **false**. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  supportAutoTag?: boolean;
  /**
   * @remarks
   * The keyword that you specify for fuzzy search when you query the asset.
   * 
   * @example
   * 47.96
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      supportAutoTag: 'SupportAutoTag',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
      supportAutoTag: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

