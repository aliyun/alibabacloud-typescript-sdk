// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTestcaseListRequest extends $dara.Model {
  /**
   * @example
   * {\\"conditionGroups\\":[[{\\"fieldIdentifier\\":\\"status\\",\\"operator\\":\\"CONTAINS\\",\\"value\\":[\\"cc961a18adf770c6e423ccc5\\"],\\"toValue\\":null,,\\"className\\":\\"status\\",\\"format\\":\\"list\\"}]]}
   */
  conditions?: string;
  /**
   * @example
   * e27b8eace6501ce51cf5d56784
   */
  directoryIdentifier?: string;
  /**
   * @example
   * 20
   */
  maxResult?: string;
  /**
   * @example
   * 2591861102250c4522380b33a6
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6d5984c7d92b23fa53d4743c37
   */
  spaceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      directoryIdentifier: 'directoryIdentifier',
      maxResult: 'maxResult',
      nextToken: 'nextToken',
      spaceIdentifier: 'spaceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: 'string',
      directoryIdentifier: 'string',
      maxResult: 'string',
      nextToken: 'string',
      spaceIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

