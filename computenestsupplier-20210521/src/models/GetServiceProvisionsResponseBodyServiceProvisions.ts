// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions } from "./GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions";
import { GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision } from "./GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision";


export class GetServiceProvisionsResponseBodyServiceProvisions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic activation for the service is defined in the template. Valid values:
   * 
   * *   true: Automatic activation for the service is defined in the template.
   * *   false: Manual activation for the service is defined in the template.
   * 
   * @example
   * true
   */
  autoEnableService?: boolean;
  commodityProvisions?: GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions[];
  /**
   * @remarks
   * The URL that points to the activation page of the service.
   * 
   * > This parameter is returned if Status is set to Disabled.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=sls
   */
  enableURL?: string;
  /**
   * @remarks
   * The information about the RAM roles of the cloud service. If this parameter is empty, no RAM roles is associated with the service.
   */
  roleProvision?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * db
   */
  serviceName?: string;
  /**
   * @remarks
   * The activation status of the cloud service. Valid values:
   * 
   * - Enabled: The cloud service is activated.
   * - EnabledByDefault: The cloud service is activated by default.
   * - Disabled: The cloud service is not activated.
   * - Unknown: The activation status of the cloud service is unknown.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The reason why the service is in the Disabled or Unknown state.
   * 
   * > This parameter is returned if Status is set to Disabled or Unknown.
   * 
   * @example
   * resource(Eip) import info missing
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      autoEnableService: 'AutoEnableService',
      commodityProvisions: 'CommodityProvisions',
      enableURL: 'EnableURL',
      roleProvision: 'RoleProvision',
      serviceName: 'ServiceName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoEnableService: 'boolean',
      commodityProvisions: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions },
      enableURL: 'string',
      roleProvision: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision,
      serviceName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commodityProvisions)) {
      $dara.Model.validateArray(this.commodityProvisions);
    }
    if(this.roleProvision && typeof (this.roleProvision as any).validate === 'function') {
      (this.roleProvision as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

