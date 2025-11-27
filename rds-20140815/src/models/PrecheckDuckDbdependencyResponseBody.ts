// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckDuckDBDependencyResponseBodyFailedCheckItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the item can be changed with one click to meet the requirements.
   * 
   * *   **true**: Yes. You can call the [ModifyDBInstanceConfig](https://help.aliyun.com/document_detail/2623684.html) operation to change the item with one click.
   * *   **false**: No.
   * 
   * >  If the major engine version of the primary does not meet the requirements, you must manually upgrade it.
   * 
   * @example
   * false
   */
  allowAutoModify?: boolean;
  /**
   * @remarks
   * The current value of the check item.
   * 
   * @example
   * 15.0
   */
  currentValue?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * MajorVersion
   */
  name?: string;
  /**
   * @remarks
   * The value or value range that meets the requirements.
   * 
   * @example
   * 17.0
   */
  requiredValue?: string;
  /**
   * @remarks
   * The check item. Valid values:
   * 
   * *   **Parameter**: The parameters of the primary instance.
   * *   **MinorVersion**: The minor engine version of the primary instance.
   * *   **MajorVersion**: The major engine version of the primary instance.
   * 
   * @example
   * Parameter
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      allowAutoModify: 'AllowAutoModify',
      currentValue: 'CurrentValue',
      name: 'Name',
      requiredValue: 'RequiredValue',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAutoModify: 'boolean',
      currentValue: 'string',
      name: 'string',
      requiredValue: 'string',
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

export class PrecheckDuckDBDependencyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check items that do not meet the requirements for creating DuckDB-based analytical instances.
   */
  failedCheckItems?: PrecheckDuckDBDependencyResponseBodyFailedCheckItems[];
  /**
   * @remarks
   * Indicates whether the primary instance meet the requirements for creating DuckDB-based analytical instances. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      failedCheckItems: 'FailedCheckItems',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCheckItems: { 'type': 'array', 'itemType': PrecheckDuckDBDependencyResponseBodyFailedCheckItems },
      result: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.failedCheckItems)) {
      $dara.Model.validateArray(this.failedCheckItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

