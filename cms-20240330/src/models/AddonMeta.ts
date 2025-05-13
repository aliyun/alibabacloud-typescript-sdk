// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddonMetaDashboards } from "./AddonMetaDashboards";
import { AddonMetaEnvironments } from "./AddonMetaEnvironments";


export class AddonMeta extends $dara.Model {
  alias?: string;
  categories?: string[];
  dashboards?: AddonMetaDashboards[];
  description?: string;
  environments?: AddonMetaEnvironments[];
  icon?: string;
  keywords?: string[];
  language?: string;
  latestReleaseCreateTime?: string;
  name?: string;
  once?: boolean;
  scene?: string;
  version?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      categories: 'categories',
      dashboards: 'dashboards',
      description: 'description',
      environments: 'environments',
      icon: 'icon',
      keywords: 'keywords',
      language: 'language',
      latestReleaseCreateTime: 'latestReleaseCreateTime',
      name: 'name',
      once: 'once',
      scene: 'scene',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      categories: { 'type': 'array', 'itemType': 'string' },
      dashboards: { 'type': 'array', 'itemType': AddonMetaDashboards },
      description: 'string',
      environments: { 'type': 'array', 'itemType': AddonMetaEnvironments },
      icon: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
      latestReleaseCreateTime: 'string',
      name: 'string',
      once: 'boolean',
      scene: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.dashboards)) {
      $dara.Model.validateArray(this.dashboards);
    }
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

