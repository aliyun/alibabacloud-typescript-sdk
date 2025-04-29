// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListCostCenter } from "./FlightOrderListQueryV2responseBodyModuleUserAffiliateListCostCenter";
import { FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListDepartment } from "./FlightOrderListQueryV2responseBodyModuleUserAffiliateListDepartment";
import { FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListInvoice } from "./FlightOrderListQueryV2responseBodyModuleUserAffiliateListInvoice";
import { FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListProject } from "./FlightOrderListQueryV2responseBodyModuleUserAffiliateListProject";


export class FlightOrderListQueryV2ResponseBodyModuleUserAffiliateList extends $dara.Model {
  costCenter?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListCostCenter;
  department?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListDepartment;
  invoice?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListInvoice;
  project?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListProject;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      costCenter: 'cost_center',
      department: 'department',
      invoice: 'invoice',
      project: 'project',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenter: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListCostCenter,
      department: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListDepartment,
      invoice: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListInvoice,
      project: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListProject,
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.costCenter && typeof (this.costCenter as any).validate === 'function') {
      (this.costCenter as any).validate();
    }
    if(this.department && typeof (this.department as any).validate === 'function') {
      (this.department as any).validate();
    }
    if(this.invoice && typeof (this.invoice as any).validate === 'function') {
      (this.invoice as any).validate();
    }
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

