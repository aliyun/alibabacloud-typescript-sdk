// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * The Chinese name of the YAML template.
   */
  chineseName?: string;
  /**
   * @remarks
   * The English name of the YAML template.
   * 
   * @example
   * HTTP basic routing
   */
  englishName?: string;
  /**
   * @remarks
   * The content in the YAML template.
   * 
   * @example
   * apiVersion: networking.istio.io/v1beta1\\nkind: VirtualService\\nmetadata:\\n  name: reviews-route # Name for this VirtualService.\\nspec:\\n  hosts:\\n  - reviews.prod.svc.cluster.local # Service that this VirtualSerivce belongs to. \\n  http:\\n  - name: \\"reviews-route\\" # Name for the route.\\n    route:\\n    - destination: # Uniquely identifies the instances of a service to which all traffic should be forwarded to.\\n        host: reviews.prod.svc.cluster.local # The name of a service from the service registry or ServiceEntry.\\n        port:\\n          number: 8080"
   */
  yaml?: string;
  static names(): { [key: string]: string } {
    return {
      chineseName: 'ChineseName',
      englishName: 'EnglishName',
      yaml: 'Yaml',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chineseName: 'string',
      englishName: 'string',
      yaml: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 74E97AE2-2900-55C1-A069-C3C1EA*****
   */
  requestId?: string;
  /**
   * @remarks
   * The common YAML templates for the specified type of Istio resource.
   */
  templates?: DescribeCrTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeCrTemplatesResponseBodyTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

