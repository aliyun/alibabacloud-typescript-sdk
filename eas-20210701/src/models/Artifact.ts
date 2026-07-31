// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ArtifactVersions extends $dara.Model {
  /**
   * @remarks
   * The version alias.
   * 
   * @example
   * foo
   */
  alias?: string;
  /**
   * @remarks
   * The template description associated with the version.
   * 
   * @example
   * Supports new xx feature
   */
  description?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * ali-ahpa-hz
   */
  releaseName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * V2.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      description: 'Description',
      releaseName: 'ReleaseName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
      releaseName: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Artifact extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-15T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The artifact name.
   * 
   * @example
   * foo
   */
  name?: string;
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * Image
   */
  type?: string;
  /**
   * @remarks
   * The version list.
   */
  versions?: ArtifactVersions[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      name: 'Name',
      type: 'Type',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      name: 'string',
      type: 'string',
      versions: { 'type': 'array', 'itemType': ArtifactVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

