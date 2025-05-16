// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddonNodeTemplate } from "./AddonNodeTemplate";
import { DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource } from "./DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource";


export class DescribeAddonTemplateResponseBodyAddonResourcesSpec extends $dara.Model {
  /**
   * @remarks
   * The Elastic Compute Service (ECS) resource configurations of the addon.
   */
  ecsResources?: AddonNodeTemplate[];
  /**
   * @remarks
   * The Elastic IP Address (EIP) configurations of the service.
   */
  eipResource?: DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource;
  static names(): { [key: string]: string } {
    return {
      ecsResources: 'EcsResources',
      eipResource: 'EipResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsResources: { 'type': 'array', 'itemType': AddonNodeTemplate },
      eipResource: DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource,
    };
  }

  validate() {
    if(Array.isArray(this.ecsResources)) {
      $dara.Model.validateArray(this.ecsResources);
    }
    if(this.eipResource && typeof (this.eipResource as any).validate === 'function') {
      (this.eipResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

