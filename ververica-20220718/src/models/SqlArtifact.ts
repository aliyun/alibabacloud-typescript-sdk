// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlArtifact extends $dara.Model {
  /**
   * @remarks
   * The additional dependency files. If you want to use dependencies such as UDFs, connectors, and formats that are not registered on Ververica Platform (VVP), you need to configure this parameter. You do not need to configure this parameter for dependencies that are registered on VVP.
   */
  additionalDependencies?: string[];
  /**
   * @remarks
   * The script of the SQL deployment.
   * 
   * @example
   * CREATE TEMPORARY TABLE datagen_source(   name VARCHAR ) WITH (   \\"connector\\" = \\"datagen\\" ); CREATE TEMPORARY TABLE blackhole_sink(   name  VARCHAR ) with (   \\"connector\\" = \\"blackhole\\" ); INSERT INTO blackhole_sink SELECT name from datagen_source;
   */
  sqlScript?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      sqlScript: 'sqlScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      sqlScript: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

