// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPackageResponseBodyDataAllowedProjectList } from "./GetPackageResponseBodyDataAllowedProjectList";
import { GetPackageResponseBodyDataResourceList } from "./GetPackageResponseBodyDataResourceList";


export class GetPackageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The projects in which the package is installed.
   */
  allowedProjectList?: GetPackageResponseBodyDataAllowedProjectList[];
  /**
   * @remarks
   * The details of the resources that are included in the package.
   */
  resourceList?: GetPackageResponseBodyDataResourceList;
  static names(): { [key: string]: string } {
    return {
      allowedProjectList: 'allowedProjectList',
      resourceList: 'resourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedProjectList: { 'type': 'array', 'itemType': GetPackageResponseBodyDataAllowedProjectList },
      resourceList: GetPackageResponseBodyDataResourceList,
    };
  }

  validate() {
    if(Array.isArray(this.allowedProjectList)) {
      $dara.Model.validateArray(this.allowedProjectList);
    }
    if(this.resourceList && typeof (this.resourceList as any).validate === 'function') {
      (this.resourceList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

