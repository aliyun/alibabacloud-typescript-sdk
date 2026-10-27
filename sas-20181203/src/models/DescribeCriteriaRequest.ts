// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The Asset Type to query. Valid values:
   * 
   * - **ecs**: Queries all ECS servers.
   * 
   * @example
   * ecs
   */
  machineTypes?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account for the member accounts in the resource folder.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether the entered fuzzy query field supports automatic matching. Default value: **false**. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  supportAutoTag?: boolean;
  /**
   * @remarks
   * The fuzzy match value entered when querying assets.
   * 
   * @example
   * 47.96
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      machineTypes: 'MachineTypes',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      supportAutoTag: 'SupportAutoTag',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineTypes: 'string',
      resourceDirectoryAccountId: 'number',
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

