// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   *Name*: The name of the deployment package. Fuzzy match is used.
   * *   ArtifactId: The ID of the deployment package.
   * *   ArtifactType: The type of the deployment package.
   * 
   * @example
   * ArtifactType
   */
  name?: string;
  /**
   * @remarks
   * The parameter values of the filter.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

