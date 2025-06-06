// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildCacheConfig extends $dara.Model {
  /**
   * @example
   * { 	"3C75C832-0EAD-40D6-8FA1-2BA9171C926B": "~/.npm", 	"D256BB7A-1886-4A19-A75B-A1FDC23D5A00": "~/.cache" }
   */
  keyPath?: { [key: string]: any };
  paths?: string[];
  static names(): { [key: string]: string } {
    return {
      keyPath: 'keyPath',
      paths: 'paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPath: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      paths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.keyPath) {
      $dara.Model.validateMap(this.keyPath);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

