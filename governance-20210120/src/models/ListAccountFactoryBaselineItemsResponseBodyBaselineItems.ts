// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn } from "./ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn";


export class ListAccountFactoryBaselineItemsResponseBodyBaselineItems extends $dara.Model {
  /**
   * @remarks
   * The dependency of the baseline item.
   */
  dependsOn?: ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn[];
  /**
   * @remarks
   * The description of the baseline item.
   * 
   * @example
   * Notification.
   */
  description?: string;
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_ACCOUNT_NOTIFICATION
   */
  name?: string;
  /**
   * @remarks
   * The type of the baseline item.
   * 
   * @example
   * AccountFactory
   */
  type?: string;
  /**
   * @remarks
   * The version of the baseline item.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dependsOn: 'DependsOn',
      description: 'Description',
      name: 'Name',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependsOn: { 'type': 'array', 'itemType': ListAccountFactoryBaselineItemsResponseBodyBaselineItemsDependsOn },
      description: 'string',
      name: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependsOn)) {
      $dara.Model.validateArray(this.dependsOn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

