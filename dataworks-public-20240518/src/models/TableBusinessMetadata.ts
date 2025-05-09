// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TableBusinessMetadataCategories } from "./TableBusinessMetadataCategories";
import { TableBusinessMetadataExtension } from "./TableBusinessMetadataExtension";
import { TableBusinessMetadataTags } from "./TableBusinessMetadataTags";
import { TableBusinessMetadataUpstreamTasks } from "./TableBusinessMetadataUpstreamTasks";


export class TableBusinessMetadata extends $dara.Model {
  categories?: TableBusinessMetadataCategories[][];
  extension?: TableBusinessMetadataExtension;
  /**
   * @example
   * ## 使用说明
   */
  readme?: string;
  tags?: TableBusinessMetadataTags[];
  upstreamTasks?: TableBusinessMetadataUpstreamTasks[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      extension: 'Extension',
      readme: 'Readme',
      tags: 'Tags',
      upstreamTasks: 'UpstreamTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': TableBusinessMetadataCategories } },
      extension: TableBusinessMetadataExtension,
      readme: 'string',
      tags: { 'type': 'array', 'itemType': TableBusinessMetadataTags },
      upstreamTasks: { 'type': 'array', 'itemType': TableBusinessMetadataUpstreamTasks },
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(this.extension && typeof (this.extension as any).validate === 'function') {
      (this.extension as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.upstreamTasks)) {
      $dara.Model.validateArray(this.upstreamTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

